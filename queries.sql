-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.

  SELECT Product.ProductName, Category.CategoryName 
  FROM Product
  left join Category on Product.ID = Category.ID

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.

  SELECT [Order].Id,
  Shipper.CompanyName
  FROM [Order]
  join Shipper
  on Shipper.Id = [Order].ShipVia
  Where [Order].OrderDate < date('2012-08-09');

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.

  SELECT Product.ProductName,
  OrderDetail.Quantity
  FROM OrderDetail
  join Product
  on Product.Id = OrderDetail.ProductId
  WHERE OrderDetail.OrderId = 10251 ORDER BY ProductName

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.

  SELECT [Order].Id,
  Customer.CompanyName,
  Employee.LastName
  FROM [Order]
  join Customer
  on Customer.Id = [Order].CustomerId
  join Employee
  on Employee.Id = [Order].EmployeeId
