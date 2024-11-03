import digiteo from '../assets/img/digiteo.png';
import arum from '../assets/img/arum.png';
import atop from '../assets/img/atop.png';

export const projectData = [
    {
        "name": "arum",
        "filename": arum
    },
    {
        "name": "digiteo",
        "filename": digiteo,
        "data" :{
            "category" : 'Web', 
            "name" : "Digiteo",
            "korean_name" : "디지터",
            "summary" : "디지털 미디어 리터러시 능력을 키울 수 있는 교육 콘텐츠 플랫폼",
            "skills" : ["React.js", "MUI", "Javascript", 'css', 'DRF' ],
            "tools" : ['Figma', 'Vscode', 'ERD-Cloud', 'Git'],
            "period" : "2023.07.17 ~ 2023.08.18",
            "team" : {
                "backend" : 2,
                "frontend" : 1,
                "designer" : 2,
                "pm" : 1
            }, 
            "level": 4, 
            "role" : ["기획", "디자인", "프론트엔드" ],
            "details" : []
        }
    },
   
    {
        "name": "atop",
        "filename": atop
    }
];