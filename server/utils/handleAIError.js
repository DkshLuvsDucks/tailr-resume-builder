export const handleAIError = (error, res) => {
    console.error(error);

    const status = error.status || 500;

    let message = "Something went wrong. Please try again.";

    switch (status) {
        case 429:
            message = "Too many AI requests. Please wait a minute and try again.";
            break;

        case 503:
            message = "AI service is temporarily unavailable. Please try again shortly.";
            break;

        case 401:
            message = "AI authentication failed.";
            break;
    }

    return res.status(status).json({ message });
};