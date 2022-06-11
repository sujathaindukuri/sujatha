/*let employee = {eId:'101',
                 eName:'sujatha',
                 address:'wisconsin',
                 role:{
                     withinTeam:'team member',
                     withinOrg:'consultant'
                 }
                }
                let{eId,eName,address,role:{ withinTeam,withinOrg } } = employee;

                console.log(eName +" with "+ eId+ " works as " +withinTeam+ " and " +withinOrg);*/

const sales = [{item:'ps4 pro',stock:3,original: 399.99},
{item:'xbox x onex',stock:1,original: 499.99,discount:0.01},
{item:'nintendo switch',stock:4,original: 299.99},
{item:'ps2 console',stock:1,original: 299.99,discount:0.8},
{item:'nintendo 64',stock:2,original: 199.99,discount:0.65}
];

function compute(sales)
{      
    console.log("[");
    for(part in sales)
    {  
       console.log("{") 
       console.log(sales[part].item);
       console.log(sales[part].stock);
       console.log(sales[part].original);
       if(sales[part].discount == null)
       {
           sales[part].sale=sales[part].original;
           sales[part].total=(sales[part].sale) * (sales[part].stock);
           console.log(sales[part].sale);
           console.log(sales[part].total);
       }
       else{
           sales[part].sale=(sales[part].original)-((sales[part].original)*(sales[part].discount));
           sales[part].total=(sales[part].sale) * (sales[part].stock);
           console.log(sales[part].sale);
           console.log(sales[part].total);
       }
       
       console.log("},")
    }
    console.log("]")
    }


compute(sales);