import { useRouteError } from "react-router-dom";

interface CustomError {
    statusText?: string;
    data?: string;
    message: string;
}

export default function ErrorPage() {
    const error = useRouteError() as CustomError;
    console.error(error);

    return (
        <div className="flex md:mx-auto md:container h-lvh">
            <div id="error-page" className="content-center mx-auto">
                <h1 className="py-12 text-4xl font-bold text-center">Oops!</h1>
                <p className="text-center">Sorry, an unexpected error has occurred.</p>
                <p className="py-6 italic text-center text-gray-500">
                    Status : <i>{error.statusText || error.message}</i>
                    <i className="block px-3 py-1 my-2 border border-solid rounded-md border-slate-400">
                        {error.data || 'No additional information'}
                    </i>
                </p>
            </div>
        </div>
    );
}
