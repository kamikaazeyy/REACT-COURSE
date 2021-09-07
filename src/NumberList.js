function NumberList(props) {
    //const number = [1,2,2,3,4];
    return <ul>{props.number.map((number,index) =>(<li key = {index}>{number}</li>))}</ul>;
}
export default NumberList;