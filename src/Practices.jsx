export const Practices = ()=> {
    const students = [];

    console.log(Boolean(students.length));
    console.log(students.length);
    
    return(
        <>
            {/* <p>{students.length && "no student found"}</p> */}
            {/* 1st  */}
            {/* <p>{students.length === 0 && "no student found"}</p> */}
            {/* 2nd  */}
            {/* <p>{!students.length && "no student found"}</p> */}
            {/* 3rd */}
            <p>{Boolean(!students.length) && "no student found"}</p>
           
            
            <p>NUMBER OF STUDENT: {students.length}</p>
            {/* output : 0 */}
        </>
    )
    
}
