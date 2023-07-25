import { HomeProps } from "@pages/index";
import { ProjectItem } from "./project-item";


const projects = [
    {
        id: 1,
        title: '루프탑(ROOFTOP)',
        description: '이미지 생성 AI를 도입한 NFT 마켓 플레이스',
        images: ['rooftop-0.gif', 'rooftop-1.gif', 'rooftop-2.gif', 'rooftop-3.gif', 'rooftop-4.gif'],
        period: '2023/06 - 2023/07',
        github: 'https://github.com/nazzzo/rooftop-front',
        homepage: 'https://roof-top.shop/',
        skills: ['NextJS', 'NestJS', 'Solidity', 'TypeScript', 'ReactQuery', 'Tailwind', 'MongoDB'],
        details: `
<h1 className="dark:text-white">ROOFTOP</h1>

![rooftop-0](https://github.com/nazzzo/rooftop-front/assets/112994137/d1f2ef55-5774-4a70-bde3-c6e108a0e164)


<h3 className="dark:text-white"> 프로젝트 소개 </h3>

- 뭄바이 네트워크를 기반으로 동작하는 <b>NFT 마켓 플레이스</b>입니다. <br>
- 컬렉션 및 NFT 생성 과정에서 이미지 생성 AI를 활용했으며, <br>
NFT 구입과 판매, 장바구니와 Sweep 슬라이더를 통한 대량 구매, 경매 기능, 에어드롭 등
오픈씨나 Blur와 같은 유명 NFT 마켓 플랫폼에서 사용되는 주요 기능들을 대부분 구현하고 있습니다 <br> 
- 모든 페이지는 다크모드와 반응형 웹을 지원합니다.

프로젝트에서 컨트랙트 작성과 전반적인 프론트엔드 & 백엔드 작업, 그리고 아래 주요 기능들의 구현과 배포를 담당했습니다

---

<h3 className="dark:text-white"> 📋 블록체인 관련 주요 기능 </h3>
<br>

> 1. <b className="dark:text-gray-300"> 컬렉션 생성 </b>

- 런치패드를 통해 NFT 컬렉션을 생성합니다.
- 컬렉션의 설명란을 이미지 생성 AI의 프롬프트로 활용하고 있습니다
(Eden AI의 이미지 생성 API를 사용)
- 컬렉션 제작자는 로열티 지급 설정을 통해 판매 수수료를 나눠받을 수 있습니다.

<img src="https://github.com/nazzzo/rooftop-front/assets/112994137/48f766ff-20e8-44af-81fc-0660f66162ec">

<br> <br>

> 2. <b className="dark:text-gray-300"> NFT 민팅 </b>

- NFT의 이미지 등록은 컬렉션 제작에 사용한 프롬프트를 재활용해서 컬렉션에 일체감을 줄 수 있도록 구현했습니다.
- 모든 NFT는 ERC-721 표준을 따르며, 메타데이터는 피나타 API를 통해 IPFS에 저장되고 있습니다.

![NFT 민팅](https://github.com/nazzzo/rooftop-front/assets/112994137/3223de2e-3751-497d-93ad-0e8b17ba9b5b)

<br><br>

> 3. <b className="dark:text-gray-300"> 거래 </b>

- 단일 품목에 대한 거래와 장바구니를 통한 대량 거래가 가능합니다.
- 판매자는 마켓 수수료와 제작자 로열티를 뺀 값을 판매 대금으로 지급받습니다.
- 모든 거래 내역(이벤트 로그)은 DB에 함께 저장됩니다.

![거래](https://github.com/nazzzo/rooftop-front/assets/112994137/638a3855-7282-4922-88e7-aca812ec9b84)

<br><br>

> 4. <b className="dark:text-gray-300"> 경매 </b>


- 경매가 시작되면 입찰액이 컨트랙트에 보관되며, 최고 입찰자가 바뀌면 기존의 입찰액은 환불됩니다.
- 판매자 입장에서는 미리 설정한 경매 종료 시간 전까지는 경매를 취소할 수 있지만, 종료 시간이 끝나면 반드시 경매를 종료해야 합니다.
- 입찰자 보호를 위해 마켓의 오너 계정에도 경매 종료 권한을 부여하고 있습니다.

![경매](https://github.com/nazzzo/rooftop-front/assets/112994137/0c9d3691-829c-4897-be6e-c6d58fa7b354)

<br><br>

> 5. <b className="dark:text-gray-300"> 에어드롭 </b>


- 24시간마다 새로운 에어드롭 이벤트가 발생합니다.
- 이 기간 동안 드롭 이벤트 신청자들의 활동점수에 따라 고득점자에게 NFT를 선물합니다.

![에어드롭](https://github.com/nazzzo/rooftop-front/assets/112994137/03006086-971c-40da-9fbf-03affc4b154b)

<br><br>

> 6. <b className="dark:text-gray-300"> 지갑 연결 </b>


- 메타마스크와 코인베이스 월렛을 지원하며, 사이트 내의 거래 관련 기능들은 뭄바이 네트워크에 연결 중일 때에만 활성화됩니다.

![지갑 연결](https://github.com/nazzzo/rooftop-front/assets/112994137/0c2a4931-67aa-48a8-8afa-ad2294f1e6e3)

---

<h3 className="dark:text-white"> 🛠️ 작업 환경 </h3>

프론트엔드 : Next.js, TypeScript <br>
백엔드 : Nest.js, TypeScript, MongoDB <br> 
블록체인: Solidity, Ganache, Ethers <br> 
스타일 : Tailwind CSS <br>
배포 서비스 : Amplify, Heroku <br>

- API 문서: [https://nest-deploy-c764d61cc1b8.herokuapp.com/api](https://nest-deploy-c764d61cc1b8.herokuapp.com/api)
`,
    },
    {
        id: 2,
        title: '코인 월렛',
        description: '크롬에서 사용가능한 블록체인 지갑 확장 프로그램',
        images: ['wallet-1.png', 'wallet-2.png', 'wallet-3.png'],
        period: '2023/05 - 2023/05',
        github: 'https://github.com/nazzzo/walletTest',
        homepage: '',
        skills: ['NextJS', 'Solidity', 'TypeScript', 'NodeJS', 'Redux', 'Tailwind'],
        details: `약 5일간에 거쳐 진행된 개인 프로젝트입니다 <br>
빌드 폴더를 크롬 확장프로그램으로 설치할 수 있으며 주요 기능은 다음과 같습니다

<br><br>


<b>1. 계좌 생성 & 선택</b>
- 다중 계좌 생성을 지원합니다. 모든 계좌는 계좌와 쌍을 이루는 니모닉키와 함께 생성됩니다 
<img width="394" alt="wallet-0" src="https://github.com/nazzzo/rooftop-front/assets/112994137/e9c51107-87e9-4c23-948d-0cde0bc30f67">

<br>

<b>2. 거래 </b> 
- 같은 블록체인 네트워크를 사용하는 사용자에게 토큰 이체가 가능합니다
![wallet-1](https://github.com/nazzzo/rooftop-front/assets/112994137/f6893d0c-c98c-40c7-81e5-e7e0a67f5d99)

<br>

<b>3. 거래 내역 기록</b> 
- 모든 송금 이력은 브라우저의 로컬 저장소에 저장됩니다

![wallet-3](https://github.com/nazzzo/rooftop-front/assets/112994137/904769b7-e057-410f-be6b-3a24f99e87b6)

<br>

<b>4. 계좌 찾기</b> 
- 니모닉키 입력을 통해서 잃어버린 계좌를 되찾을 수 있습니다

![wallet-2](https://github.com/nazzzo/rooftop-front/assets/112994137/ca342861-ebe0-416b-b39c-89f0bff0731b)
`,
    },
    {
        id: 3,
        title: '망고 마켓',
        description: '동네 인증을 필요로 하는 지역기반형 물물교환 플랫폼',
        images: ['mango-2.gif', 'mango-3.gif', 'mango-1.gif', 'mango-4.gif','mango-5.gif'],
        period: '2023/03 - 2023/03',
        github: 'https://github.com/nazzzo/mangomarket',
        homepage: 'https://mgmarket.store',
        skills: ['React', 'NodeJS', 'Redux', 'MySQL', 'styled-components'],
        details: `
<h1 className="dark:text-white">망고마켓</h1>

![mango-5](https://github.com/nazzzo/rooftop-front/assets/112994137/8d131b8a-735d-4bd3-83f5-3e6766c7e76b)

- 망고마켓은 지역기반형 물물교환 서비스 플랫폼입니다
- 가입자가 서비스를 이용하려면 반드시 동네 인증을 필요로 하며, 근처 주민들끼리만 채팅을 통해 교환 신청 및 물물교환이 가능합니다
- 사이트 이용을 위해 회원가입과 동네 인증(강동구 천호동 주변)을 부탁드립니다

프론트엔드 작업과 지역 인증 & 채팅 기능 구현, 백엔드의 SQL 쿼리문 작성 업무를 중점적으로 담당했습니다.

---

<h3 className="dark:text-white">📋 주요기능 소개 </h3>

> 1. <b className="dark:text-gray-300"> 동네 인증 </b>

- 동네인증 기능 구현을 위해 Geolocation API와 카카오 Map API를 사용했습니다.
- 사용자가 위치한 좌표값을 DB에 저장한 뒤, MySQL에서 제공하는 ST_DISTANCE_SPHERE 함수로 반경을 계산해서 일정 범위 내에서 쓰인 게시글만 출력합니다.
(사용자가 위치한 지역에서 최대 10km 밖에서 등록된 글은 표시되지 않습니다.)

![mango-2](https://github.com/nazzzo/rooftop-front/assets/112994137/6a08ef6a-f535-484f-8144-0ef676ea5013)

<br>

> 2. <b className="dark:text-gray-300"> 장터 등록 </b>

- 교환뭂품의 사진을 여러장 등록해서 자유롭게 썸네일을 선택할 수 있습니다.
- 가전, 디지털기기 등 다양한 카테고리 설정이 가능합니다.
- 상품의 제목과 해시태그는 검색 및 키워드 알림 기능에 활용됩니다.

![mango-3](https://github.com/nazzzo/mangomarket/assets/112994137/cec3dcae-cb5d-4b75-9e61-3c8ff25179e6)

<br>



> 3. <b className="dark:text-gray-300"> 채팅 </b>

- 소켓 IO를 통해 구현되었습니다.
- 구매자의 유저 ID와 판매자의 게시글 인덱스를 묶어서 룸으로 설정합니다.
- 채팅 메세지에도 카카오 맵 API를 호출해서 보다 간편하게 사용자간의 거래 약속을 잡을 수 있도록 구현했습니다.

![mango-4](https://github.com/nazzzo/rooftop-front/assets/112994137/0bf3b3d8-d8d9-42c5-a30e-61035eaa227c)

<br>

---

<h3 className="dark:text-white">🛠️ 작업 환경 </h3>

프론트엔드 : React <br>
백엔드 : Express, MySQL <br> 
스타일 : styled-components <br>
배포 서비스 : AWS EC2 <br>
`,
    },
    {
        id: 4,
        title: 'IPK Blog',
        description: '소셜 로그인 기능과 마크다운 문법의 텍스트 작성을 지원하는 블로그 서비스',
        images: ['ipk-0.gif', 'ipk-1.gif', 'ipk-2.gif', 'ipk-3.gif'],
        period: '2023/01 - 2023/02',
        github: 'https://github.com/nazzzo/ipk_board',
        homepage: '',
        skills: ['JavaScript', 'NodeJS', 'MySQL'],
        details: `
<h1 className="dark:text-white">IPK Blog</h1>        

![ipk-0](https://github.com/nazzzo/rooftop-front/assets/112994137/55ad75cd-bf92-44dc-b9e5-9eb0d7b48b76)

- Nunjucks 템플릿 엔진을 기반으로 제작된 블로그 플랫폼입니다
- 소셜 로그인(카카오)과 마크다운 문법의 텍스트 작성을 지원합니다

프론트엔드 작업과, 백엔드의 SQL 쿼리문 작성 업무를 중점적으로 담당했습니다

---


- 마크다운 문법 지원을 위해 ToastUI 라이브러리를 적용했습니다
![ipk-2](https://github.com/nazzzo/rooftop-front/assets/112994137/6d165f21-5fd4-4e28-a68b-dc4da700c32e)

- 무한스크롤과 해시태그 분류, 즐겨찾기, 열람 히스토리, 포스트에 대한 대댓글 기능 등을 포함하고 있습니다
![ipk-3](https://github.com/nazzzo/rooftop-front/assets/112994137/0b4dfc10-04f3-4bfd-8d94-edcfc0cd33ad)
![ipk-1](https://github.com/nazzzo/rooftop-front/assets/112994137/2ccc9562-0471-410d-b118-48fa503a57cc)
`,
    },
]

export const Portfolio = ({ id }: HomeProps) => {
    return (
        <div id={id} className="lg:w-4/5 mx-auto my-20">
            <div className="flex flex-col items-center justify-center min-h-screen px-3">
                <div className="text-gray-800 dark:text-gray-200 text-center">
                    <h1 className="title-font mb-3 text-4xl font-bold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-6xl hover:text-red-500 dark:hover:text-yellow-500 transition-all duration-300 cursor-pointer">Projects</h1>
                    <div className="flex mt-6 justify-center">
                        <div className="w-44 md:w-56 lg:w-66 h-1 rounded-full bg-purple-500 dark:bg-indigo-500 inline-flex"></div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row flex-wrap mt-6 justify-between">
                    {projects.map((project) => (
                        <ProjectItem key={project.id} data={project} />
                    ))}
                </div>
            </div>
        </div>
    )
}