import bunyan from "bunyan";

const logError = bunyan.createLogger({
    name: "portfolio",
    level: "info",
});

export default logError;