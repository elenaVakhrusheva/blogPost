<div className="App">
    <UserContext.Provider value={{user:currentUser}}>
      <CardContext.Provider value={{posts/* , favorites, handleLike: handleProductLike */}}>
        <Header user={currentUser}/>
          <Container>
            <Box className="title-wrap">
              <Breadcrumb/>             
            </Box>
                    
            {/* <PostList posts={postData}/> */}

            <Routes location={(backgroundLocation && {...backgroundLocation, pathname: initialPath}) || location}>
              <Route index element={
               <PostList posts={PostList}/>
              }/>            
              {/* <Route path='/favorites' element ={
                <FavoritePage/>}/>    */}         
              <Route path='*' element={<NotFounder/>}/>
            </Routes>
            
           {/*  {backgroundLocation && (
              <Routes>
                <Route path='/login' element={
                  <Modal>
                    <Login />
                  </Modal>
                }/>

                <Route path='/register' element={
                  <Modal>
                    <Register />
                  </Modal>
                }/>
 
              </Routes>
              )} */}

          </Container>
        <Footer/>
      </CardContext.Provider>
    </UserContext.Provider>
  </div>