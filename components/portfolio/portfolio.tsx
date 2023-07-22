import { HomeProps } from "@pages/index";
import { ProjectItem } from "./project-item";


const projects = [
    {
        id: 1,
        title: '루프탑(ROOFTOP)',
        description: '생성형 AI를 접목한 NFT 마켓 플레이스',
        images: ['rooftop-0.gif', 'rooftop-1.gif', 'rooftop-2.gif', 'rooftop-3.gif', 'rooftop-4.gif'],
        period: '2023/06 - 2023/07',
        github: 'https://github.com/nazzzo/rooftop-front',
        homepage: 'https://roof-top.shop/',
        skills: ['NextJS', 'NestJS', 'Solidity', 'TypeScript', 'ReactQuery', 'Tailwind', 'MongoDB'],
        details: `API Doc : https://nest-deploy-c764d61cc1b8.herokuapp.com/api

뭄바이 네트워크를 기반으로 하는 NFT 마켓 플레이스입니다
컬렉션 생성과 NFT 민팅 과정에서 이미지 생성 AI를 활용했고(Eden AI에서 제공하는 이미지 생성 API를 도입했습니다)
NFT 구입 및 판매, 스윕을 통한 대량 구매와 경매 기능, 에어드롭 등
오픈씨나 Blur와 같은 유명 NFT 마켓 플랫폼에서 사용되는 주요 기능들을 대부분 구현하고 있습니다

[블록체인 관련 주요기능 소개]
- 컬렉션 생성: 컬렉션의 설명란을 생성형 AI의 프롬프트로 활용하고 있으며 AI를 통한 이미지 생성은 AI를 통한 이미지 생성은 OpenAI 이미지 생성 모델을 사용중입니다
-  NFT 민팅: 이미지 등록은 컬렉션 제작에 사용한 프롬프트를 재활용해서 컬렉션에 일체감을 줄 수 있도록 구현했습니다. 메타데이터는 IPFS에 저장되고 있습니다.
- 거래: 단일 품목에 대한 거래, 장바구니를 통한 다중 구매가 가능하며 모든 거래는 이벤트 로그를 디코딩한 결과값이 DB에 함께 저장됩니다.
- 경매: 경매가 시작되면 입찰액이 컨트랙트에 보관됩니다. 최고입찰자가 바뀌면 기존의 입찰액은 환불됩니다. 
판매자 입장에서 미리 설정한 경매 종료시간 전까지는 경매 취소가 가능하며, 종료시간이 끝나면 반드시 경매종료를 통해 NFT의 소유권을 이전시켜야 합니다. 
마켓의 오너 계정에도 경매종료 권한을 부여하고 있습니다. 
- 에어드롭 : 24시간마다 새로운 에어드롭 이벤트가 발생합니다. 같은 시간, 드롭 이벤트 신청자들의 활동점수에 따라 고득점자에게  NFT를 선물합니다
- 지갑 연결: 메타마스크와 코인베이스 월렛을 지원하고 있으며, 사이트 내의 거래 관련 기능들은 뭄바이 네트워크에 연결중일 때에만 활성화됩니다

그 밖에도 유저 정보 수정, 팔로우, 검색, 차트 정렬, 장바구니 등 다양한 기능들이 포함되어 있고, 모든 페이지에서 다크모드 설정과 반응형 웹을 지원합니다

코드 작업은 프론트엔드는 NextJs, 백엔드는 NestJs, 스타일은 테일윈드 CSS를 통해 진행되었으며
프로젝트 내에서 컨트랙트 작성, 프론트와 백엔드 전반적인 코드 작성과 리팩토링 및 배포를 담당했습니다
배포 서비스는 아마존의 Amplify(프론트엔드)와 Heroku(백엔드)를 사용했습니다
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
        details: `약 일주일간에 거쳐 진행된 개인 프로젝트입니다
빌드 폴더를 크롬 확장프로그램으로 설치할 수 있으며, 주요 기능은 다음과 같습니다

- 계좌 생성 & 선택: 다중 계좌 생성을 지원합니다. 모든 계좌는 계좌와 쌍을 이루는 니모닉키와 함께 생성됩니다 
- 거래: 같은 블록체인 네트워크를 사용하는 사용자에게 토큰 이체가 가능합니다
- 거래 내역 기록: 모든 송금 이력은 브라우저의 로컬 저장소에 저장됩니다
- 계좌 찾기: 니모닉키를 입력해서 잃어버린 계좌를 되찾을 수 있습니다
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
        details: `지역기반형 물물교환 서비스 플랫폼입니다.
가입자가 서비스를 이용하려면 반드시 지역 인증을 필요로 하며, 같은 동네 사람끼리만 채팅을 통해 교환 신청 및 물물교환이 가능합니다.

- 동네인증 기능 구현을 위해 Geolocation API와 카카오 Map API를 사용했습니다.
사용자가 위치한 좌표값을 DB에 저장한 뒤, MySQL에서 제공하는 ST_DISTANCE_SPHERE 함수로 반경을 계산해서, 일정 범위 내에서 쓰인 게시글만 출력합니다.
(사용자가 위치한 지역에서 최대 10km 밖의 글은 표시되지 않습니다.)
- 채팅 기능 구현은 소켓 IO를 활용했고, 구매자의 유저 ID와 판매자의 게시글 인덱스를 묶어서 룸으로 설정했습니다.
- 채팅 메세지에도 카카오 맵 API를 호출해서 보다 간편하게 사용자간의 거래 약속을 잡을 수 있도록 구현했습니다.

프론트엔드 작업과 지역 인증 & 채팅 기능 구현, 백엔드의 SQL 쿼리문 작성 업무를 중점적으로 담당했습니다.
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
        details: `소셜 로그인(카카오) 기능과 마크다운 문법의 텍스트 작성을 지원하는 블로그 서비스 입니다

- Nunjucks 템플릿 엔진을 기반으로 제작되었습니다
- 게시글 작성시 이미지 등록을 위해 Multer를, 마크다운 문법 지원을 위해 ToastUI 라이브러리를 적용했습니다
- 그 밖에 무한스크롤과 해시태그 분류, 즐겨찾기, 열람 히스토리, 포스트에 대한 대댓글 기능 등을 포함하고 있습니다

프론트엔드 작업과, 백엔드의 SQL 쿼리문 작성 업무를 중점적으로 담당했습니다
`,
    },
]

export const Portfolio = ({ id }: HomeProps) => {
    return (
        <div id={id} className="lg:w-4/5 mx-auto my-20">
            <div className="flex flex-col items-center justify-center min-h-screen px-3">
                <div className="text-gray-800 dark:text-gray-200 text-center">
                    <h1 className="title-font mb-4 text-4xl font-bold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-6xl hover:text-red-500 dark:hover:text-yellow-500 transition-all duration-300 cursor-pointer">Projects</h1>
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