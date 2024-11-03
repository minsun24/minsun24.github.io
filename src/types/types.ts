

export interface ProjectDetail{
    page: string;
    function: string;
    image : {
        src: ImageData;
        alt: string;
    }
}

export type ProjectCatetory= 'Web' | 'App' | undefined

export interface ProjectItem{
    name: string;
    filename: string;
    data?:{
        category: ProjectCatetory; 
        name: string;
        korean_name: string;
        summary: string;
        skills: string[];
        tools: string[];
        period: string;
        team: {
            backend: number;
            frontend: number;
            designer: number;
            pm: number;
        };
        level: number;
        role: string[];
        link?:string;
        details?: ProjectDetail[];
    }
}

export type DataType= 'stack' | 'framework' | 'project'
export type ArrayType = StackItem[] | ProjectItem[] | TechItme[];

// export interface ProjectModalProps {
//     isOpen: boolean;
//     onClose: () => void;
//     data: ProjectItem;
//     setIsProject: () => void;
// }

export interface ArrayImageProps {
    data: ArrayType;
    type: DataType; // data type 
}



// -----------------------------Stack ------------------------------
export interface StackItem {
    name:string;
    filename:string; 
}

export interface TechItme{
    name:string;
    filename:string; 
}