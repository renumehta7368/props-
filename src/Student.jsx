import PropTypes from"prop-types";

function Student(props){
    return(
       
        <div className="student">
            <p>name:{props.name}</p>
            <p>age: {props.age}</p>
            <p>isStudent:{props.isStudent ? "Yes":"No"}</p>

        </div>
    );
}

Student.PropTypes={
    name : PropTypes.string,
    age : PropTypes.number,
    isStudent : PropTypes.bool,
}
Student.defaultProps = {name:'reyu',
                   age:'5',
                    isStudent:true,
};
export default Student;