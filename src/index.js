const express = require('express');

const errorMiddleware = require('./middleware/err-404');

const indexRouter = require('./routes/index');
const bookRouter = require('./routes/books');

const app = express();
app.use(express.urlencoded());
app.set("view engine", "ejs");
app.set("views", "src/views")

app.use('/', indexRouter);
app.use('/api/books', bookRouter);

app.use(errorMiddleware);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
});