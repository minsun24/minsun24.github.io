import digiteo from '../assets/img/digiteo.png';
import arum from '../assets/img/arum.png';
import atop from '../assets/img/atop.png';

export const projectData = [
    {
        "name": "arum",
        "filename": arum,
        "link": "", 
        "data":{
            "category": 'App',
            "name": "ARUM",
            "korean_name": "어루만짐",
            "summary": "현대인의 정신 건강을 위한 데일리 미션, 다이어리 앱", 
            "skills": ["React Native", "Typescript", "Expo-Cli", "DRF", ], 
            "tools" : ["Figma", "Vscode", "ERD-Cloud", "Git"],
            "period": "2024.07.05 ~ 2024.08.05  (1 개월)",
            "team": {
                "backend": 2,
                "frontend" : 2,
                "designer": 1
            },
            "role" : ["기획", "디자인", "프론트엔드" ],         

        }
    },
    {
        "name": "digiteo",
        "filename": digiteo,
        "link": "https://github.com/No-Devides-Found/digiteo-frontend", 
        "data" :{
            "category" : 'Web', 
            "name" : "Digiteo",
            "korean_name" : "디지터",
            "summary" : "디지털 미디어 리터러시 능력을 키울 수 있는 교육 콘텐츠 플랫폼",
            "skills" : ["React.js", "MUI", "Javascript", 'CSS', 'DRF' ],
            "tools" : ['Figma', 'Vscode', 'ERD-Cloud', 'Git'],
            "period" : "2023.07 ~ 2023.08  (1 개월)",
            "team" : {
                "backend" : 2,
                "frontend" : 1,
                "designer" : 2
            }, 
            "role" : ["기획", "디자인", "프론트엔드" ],         
            "details":[
                "UI/UX 설계 및 프론트엔드 개발 담당",
                "회원 커뮤니티 기능(게시글 작성, 댓글, 좋아요) 구현",
                "콘텐츠 학습 페이지(단계별 학습, 학습 현황 페이지) 구현",
                "태그 검색 기능 구현"
            ],
            "learned":[
                "프론트와 백을 분리해서 개발하는 방법을 학습함",
                "재사용 가능한 UI 컴포넌트를 설계하고 구현하는 방법을 배움",
                "useState, useEffect 등 react hook을 사용하여 상태 관리하는 방법을 익힘",
                "axios를 사용해 비동기 통신하는 방법을 배움"
            ]
        }
    },
   
    {
        "name": "atop",
        "filename": atop,
        "link": "", 
        "data":{
            "category": "Web",
            "name": "AtoP",
            "korean_name": "아마추어 투 프로",
            "summary": "대학생 컨설턴트 팀과 자영업자를 매칭해주고 컨설팅 과정을 관리해주는 웹 서비스 개발",
            "skills": ["Django", "Python", "Bootstrap", "HTML", "Channels"],
            "tools": ["Figma", "ERD-Cloud", "Git", "Vscode"],
            "period": "2023.06 ~ 2024.07  (1 개월)", 
            "team" : {
                "backend" : 2,
                "frontend" : 2
            }, 
            "role": ["프론트엔드", "백엔드", "디자인"], 
            "details":[
                "UI/UX 디자인 구성 및 설계에 참여, 프론트엔드 기능 구현을 전담해 업무 수행", 
                "회원가입/로그인/로그아웃/개인정보 수정 기능 개발", 
                "자영업자와 컨설턴트를 연결해주는 매칭 시스템 개발", 
                "Django Channels와 WebSocket을 사용해 자영업자와 컨설턴트가 주고받는 웹 채팅 기능 구현",
            ],
            "learned": [
                "제한된 기간 내에 프로젝트를 완성할 수 있도록 일정을 관리하는 방법을 배움", 
                "협업을 통해 git 관리의 중요성을 배움", 
                "피그마를 이용한 플로우 차트와 와이어 프레임을 기반으로 기획 파트와 협업하는 방식을 배움", 
                "웹 채팅 기능을 구현하며 비동기 프로그래밍과 웹 소켓 프로토콜을 이해함"
            ]
        }
    }
];