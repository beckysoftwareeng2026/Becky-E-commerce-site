{
return (
    <Router>
        <div className="App"
        <Nav />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<Books books={books} />} />
                      {/*<Route path="/books" element={() => <Books books={books} />} */}
            <Route path="books/:id" element={<Cart books={books} cart={cart}
            changeQuantity={changeQuantity} />} />

        </Routes>
        </div>
    </Router>
);
}

export default App;
