import spinner from '../img/spinner.gif';

const Spinner = () => {
    return (
        <img src={spinner}  style={{ width: '200px', margin: 'auto', display: 'block', paddingTop: '50px' }} alt ="Loading" />
    )
}

export default Spinner;
// alt="Spinner"