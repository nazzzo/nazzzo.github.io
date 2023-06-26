import { useInput } from '@utils/hooks/useInput'
import { CreateNftWrapper, NftFormContainer, NftTitle, NftLabel } from './styled/createNft.styled'
import request from '@utils/request'
import React, { useState } from 'react'
import { InputBox, PriceInputBox, TextArea } from '@components/common/input'
import { Button } from '@components/common/button'
import { LoadingSpinner } from '@components/common/loading/loading'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { FileNftInputBox } from '@components/common/input/fileNftInputBox'
import { NFTMint } from './nftmint'
import { ErrorAlert, SuccessAlert } from '@components/common/successAlert'

interface MintProps {
    collectionAddress: string
    royalty: string
}

interface CreateNftProps {
    setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}

export const CreateNft = ({
    setIsOpenModal,
    collectionAddress,
    royalty,
}: CreateNftProps & MintProps) => {
    const [isLoading, setIsLoading] = useState(false)
    const [nftImage, setNftImage] = useState('')
    const [metaData, setMetaData] = useState('')

    const nftName = useInput('')
    const nftPrice = useInput('')
    const nftDescription = useInput('')

    const success = () => toast.success('Image Uploaded!')

    const handlePinataSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        setIsLoading(true)

        try {
            if (!nftImage) return

            fetch('/api/verify', {
                method: 'POST',
                body: JSON.stringify({
                    name: nftName.value,
                    description: nftDescription.value,
                    image: nftImage,
                }),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log('mint3 resData', data)
                    const tokenURI = `ipfs://${data.IpfsHash}`
                    setMetaData(tokenURI)
                    setIsLoading(false)
                })
                .catch((error) => console.log(error))
        } catch (e: any) {
            console.log(e.message)
        }
    }

    return (
        <>
            <CreateNftWrapper>
                <NftFormContainer onSubmit={handlePinataSubmit}>
                    <NftTitle className="text-center">
                        Welcome! This is where you register your NFT.
                    </NftTitle>
                    <NftLabel htmlFor="NftName">NFT Name</NftLabel>
                    <InputBox
                        value={nftName.value}
                        onChange={nftName.onChange}
                        name="name"
                        icon="mdi:collection"
                        placeholder="Please write down the NFT name"
                    />

                    <NftLabel htmlFor="NftPrice">NFT Price</NftLabel>
                    <PriceInputBox
                        value={nftPrice.value}
                        onChange={nftPrice.onChange}
                        name="price"
                        icon="cryptocurrency-color:matic"
                        placeholder="0.000"
                    />
                    <NftLabel htmlFor="NftDescription">Description</NftLabel>
                    <TextArea
                        value={nftDescription.value}
                        onChange={nftDescription.onChange}
                        id="description"
                        placeholder="Please introduce your NFT"
                    />
                    <NftLabel htmlFor="NftImage">대표 이미지 등록</NftLabel>
                    <FileNftInputBox
                        state={nftImage}
                        setState={setNftImage}
                        id="file-upload"
                        name="file-upload"
                        type="file"
                    />
                    {isLoading && !metaData && (
                        <Button type="submit" color="blue" disabled>
                            <LoadingSpinner /> Uploading...
                        </Button>
                    )}
                    {!isLoading && !metaData && (
                        <Button type="submit" color="blue">
                            NFT Registration
                        </Button>
                    )}
                    {!isLoading && metaData && (
                        <NFTMint
                            collectionAddress={collectionAddress}
                            royalty={royalty}
                            price={nftPrice.value as string | number}
                            metaData={metaData}
                        >
                            List NFT on Market
                        </NFTMint>
                    )}
                </NftFormContainer>
            </CreateNftWrapper>
        </>
    )
}
