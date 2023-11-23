import app from "./app.js";

const port = 3001;

app.listen(port, () => {
    console.log();
    console.log(`Executando na porta ${port}`);
    console.log(`CTROL + Clique em http://localhost:${port}`);
});
