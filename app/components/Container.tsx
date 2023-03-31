'use client';

interface ContainerProps {
    children: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({
    children
}) => {
    return ( 
        <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">{children}</div>
     );
}
 
export default Container;

// สร้าง React Functional Component ที่ชื่อว่า Container โดยมี interface ContainerProps ซึ่งกำหนดว่ามี property children 
//ซึ่งจะเป็น ReactNode ซึ่งสามารถเป็นอะไรก็ได้ที่ React รองรับ เช่น element, component, หรือ plain text เป็นต้น
// ภายใน Container component นั้น จะรับ children เป็น argument ที่ถูกส่งมาผ่าน props และนำมา render ใน div element

//สร้างเพื่อนำ container ที่ responsive ไปใช้ต่อ