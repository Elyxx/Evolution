import './SphereStyle.css'

export default function Sphere(props) {
    const { alive } = props;

    useEffect(() => {
        console.log(`Cell [${x}, ${y}] mounted`);
        return () => console.log(`Cell [${x}, ${y}] unmounted`);
    }, []);

    return <>
        <div className={`dot${alive == '1' ? '.alive' : ''}`}></div>
    </>
}