// 对于import  '../icons/XX.svg' 无效
// 对于import XX from  '../icons/XX.svg' 赋值语句有效
declare module '*.svg' { 
    const content:any;
    export default content;
}