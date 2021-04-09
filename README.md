# OnlineStoreProject

This project implements an CRUD application for an online store using MongoDB, Node.js, JavaScript, CSS and HTML. The demo video can be found [here](https://www.youtube.com/watch?v=pOUOpkx5VEU). 

User stories: 

- A user can create a new product, view all the products, update a product, delete a product. 

- A user can find products by name. 

- A user can sort the products by name, price, quantity or rating. 

- A user can select products and make list of them. 


## The structure of the repository
- [assets](https://github.com/Oana-Ivan/OnlineStoreProject/tree/main/assets):
      
    - [css](https://github.com/Oana-Ivan/OnlineStoreProject/tree/main/assets/css) (CSS code - pages style)
      
      
    - [js](https://github.com/Oana-Ivan/OnlineStoreProject/tree/main/assets/js) (JavaScript code: [index.js](https://github.com/Oana-Ivan/OnlineStoreProject/blob/main/assets/js/index.js), [crud.js](https://github.com/Oana-Ivan/OnlineStoreProject/blob/main/assets/js/crud.js))

- [node_modules](https://github.com/Oana-Ivan/OnlineStoreProject/tree/main/node_modules)

- [server](https://github.com/Oana-Ivan/OnlineStoreProject/tree/main/server)

      
    - [controller](https://github.com/Oana-Ivan/OnlineStoreProject/blob/main/server/controller): [productController](https://github.com/Oana-Ivan/OnlineStoreProject/blob/main/server/controller/productController.js)
      
    - [database](https://github.com/Oana-Ivan/OnlineStoreProject/blob/main/server/database): [connection.js](https://github.com/Oana-Ivan/OnlineStoreProject/blob/main/server/database/connection.js)
      
    - [model](https://github.com/Oana-Ivan/OnlineStoreProject/blob/main/server/model): [model.js](https://github.com/Oana-Ivan/OnlineStoreProject/blob/main/server/model/model.js)  
    
    - [routes](https://github.com/Oana-Ivan/OnlineStoreProject/blob/main/server/routes): [router.js](https://github.com/Oana-Ivan/OnlineStoreProject/blob/main/server/routes/router.js)

- [views](https://github.com/Oana-Ivan/OnlineStoreProject/tree/main/views)
    
    - [include](https://github.com/Oana-Ivan/OnlineStoreProject/blob/main/views/include) (folder with code used by multiple pages)
    
        - [_footer.ejs](https://github.com/Oana-Ivan/OnlineStoreProject/blob/main/views/include/_footer.ejs)

        - [_header.ejs](https://github.com/Oana-Ivan/OnlineStoreProject/blob/main/views/include/_header.ejs)

        - [_form_product.ejs](https://github.com/Oana-Ivan/OnlineStoreProject/blob/main/views/include/_form_product.ejs)
        
    
    - [index.ejs](https://github.com/Oana-Ivan/OnlineStoreProject/tree/main/views/index.ejs)
    
    - [add_product.ejs](https://github.com/Oana-Ivan/OnlineStoreProject/tree/main/views/add_product.ejs)
    
    - [update_product.ejs](https://github.com/Oana-Ivan/OnlineStoreProject/tree/main/views/update_product.ejs)

- [config.env](https://github.com/Oana-Ivan/OnlineStoreProject/blob/main/config.env)

- [server.js](https://github.com/Oana-Ivan/OnlineStoreProject/blob/main/server.js)

## Backend 

To store the data the project uses MongoDB(a NoSQL database program). 

![mongodb](https://user-images.githubusercontent.com/49486605/114174779-cad7db00-9941-11eb-809d-bdd9bd357a92.png)

To implement the CRUD operations on a product, the project uses Node.js. To test the endpoints of the application, I used Postman: 

Create Product: 

![create](https://user-images.githubusercontent.com/49486605/114175132-50f42180-9942-11eb-87e0-e2fb0a655c58.png)

Get all products: 

![getproduct](https://user-images.githubusercontent.com/49486605/114175496-b9430300-9942-11eb-9c8f-4170c8a1fadc.png) 

Update product 

![update](https://user-images.githubusercontent.com/49486605/114175511-b9db9980-9942-11eb-93d0-51ebc6b7de7a.png)

Delete product: 

![delete](https://user-images.githubusercontent.com/49486605/114175515-b9db9980-9942-11eb-8711-fda9b24db3d7.png)

## Frontend 

For the frontend part, this project uses JavaScript, CSS and HTML. It has 3 pages: 

Index 

![index1](https://user-images.githubusercontent.com/49486605/114175520-ba743000-9942-11eb-9a92-1464df64d383.png)

When the screen is less then 1024px: 

![index2](https://user-images.githubusercontent.com/49486605/114175526-ba743000-9942-11eb-86c9-4c408f9a89fc.png)

When the user has saved lists of products: 

![index3](https://user-images.githubusercontent.com/49486605/114175530-ba743000-9942-11eb-928e-2e444ae3720e.png) 

Update product 

![1](https://user-images.githubusercontent.com/49486605/114175747-fe673500-9942-11eb-8c64-f0c7dd14dfea.png)

Add_product 

![2](https://user-images.githubusercontent.com/49486605/114175750-ff986200-9942-11eb-8a04-3bed85aad306.png)

#### Used tutorial

When I started this project I got inspired by this [tutorial](https://www.youtube.com/watch?v=W1Kttu53qTg).


