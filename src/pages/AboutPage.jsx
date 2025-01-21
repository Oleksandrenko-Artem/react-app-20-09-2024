import Slider from './../components/Slider/Slider';

const AboutPage = () => {
    return (
        <section>
            <h1>About page</h1>
            <Slider min={0} max={1000} render={(value) => (<p>current value = {value}</p>)} />
            <Slider min={0} max={100} render={(value) => (
                <div style={{height: '50px', backgroundColor: 'lightblue'}}>
                <div style={{height: '100%', backgroundColor: 'purple', width: `${value}%`}}>
                </div>
            </div>)} />
        </section>
    );
};

export default AboutPage;
