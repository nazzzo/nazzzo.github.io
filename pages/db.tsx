import { LoadingSpinner2 } from '@components/common/loading'
import { Filter } from '@components/filter'
import { ItemList } from '@components/items'
import { RootLayout } from '@components/layout/layout'
import request from '@utils/request'
import { useQuery } from 'react-query'

const Db = () => {

    // const getAllCollectionData = async () => {
    //     try {
    //         const { data } = await request.get(`collection/`)
    //         // console.log('getAllCollectionData : ', data)
    //         return data
    //     } catch (error: unknown) {
    //         throw new Error(error as string)
    //     }
    // }

    // const { data: allCollectionData, isLoading: getAllCollectionLoading } = useQuery(
    //     ['allCollection'],
    //     () => getAllCollectionData()
    // )

    // const isLoading = getAllCollectionLoading

    // if (isLoading || !allCollectionData) return <LoadingSpinner2/>

    return (
        <RootLayout>
            <Filter />
            <ItemList />
        </RootLayout>
    )
}

export default Db
