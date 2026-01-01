export default function ChartIframe({ src }) {
    return (
        <iframe
            src={src}
            title="Cortex Chart"
            style={{ border: "none", width: "100%", height: "100%" }}
        />
    );
}
