# Tools for AI

- Easy-peasy-ai
- AIPRM
- 

+-----------+
         |   User    |
         +-----------+
         | user_id   | (Primary Key)
         | username  |
         | email     |
         | password  |
         | address   |
         | phone     |
         +-----------+

            ||
            \/

         +-----------+
         |  Product  |
         +-----------+
         | product_id| (Primary Key)
         | name      |
         | price     |
         | quantity  |
         | category_id| (Foreign Key to Category)
         +-----------+

            ||
            \/

         +-----------+
         | Category  |
         +-----------+
         | category_id| (Primary Key)
         | name      |
         +-----------+

            ||
            \/

         +-----------+
         |   Order   |
         +-----------+
         | order_id  | (Primary Key)
         | user_id   | (Foreign Key to User)
         | total_amount|
         | order_date|
         | status    |
         +-----------+

            ||
            \/

         +-----------------+
         |   OrderItem     |
         +-----------------+
         | order_item_id   | (Primary Key)
         | order_id        | (Foreign Key to Order)
         | product_id      | (Foreign Key to Product)
         | quantity        |
         | price_per_unit  |
         +-----------------+

            ||
            \/

         +--------------+
         |   Payment    |
         +--------------+
         | payment_id   | (Primary Key)
         | order_id     | (Foreign Key to Order)
         | payment_date |
         | amount       |
         | payment_status |
         +--------------+
