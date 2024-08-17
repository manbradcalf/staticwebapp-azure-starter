module.exports = async function (context, req) {
    context.res.json({
        text: "request was " + JSON.stringify(req)
    });
};