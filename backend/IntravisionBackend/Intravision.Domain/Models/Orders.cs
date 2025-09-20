using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


//Datetime, ProductId, Quantity, Amount.
namespace Intravision.Domain.Models
{
    [Table("orders")]
    public class Orders
    {
        [Key]
        [Column("id")]
        public Guid Id { get; set; }

        [Column("orderid")]
        public Guid OrderId { get; set; } 

        [Column("datetime")]
        public DateTime DateTime { get; set; }

        [Column("brandname")]
        public string BrandName { get; set; } = String.Empty;

        [Column("quantity")]
        public int Quantity { get; set; } = 0;

        [Column("amount")]
        public int Amount { get; set; } = 0;

        //public int GoodId { get; set; }                      // FK

        public Goods Goods { get; set; } 
    }
}
