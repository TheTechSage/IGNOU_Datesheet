import { useEffect } from "react";
import { FunctionComponent as FC } from "react";

const VisitorCounter : FC = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src ="https://counterapi.com/c.js?";
        script.async = true;
        document.body.appendChild(script);

        // Cleanup function to remove scripts if necessary
        return () => {
            document.body.removeChild(script)
        };
    }, []);

    return (
        <div>
            {/* Optionally, you can display some content here */}
            loading...
        </div>
    );
};
export default VisitorCounter;