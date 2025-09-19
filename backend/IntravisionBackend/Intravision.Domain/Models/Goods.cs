using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;



namespace Intravision.Domain.Models
{
    [Table("goods")]
    public class Goods
    {
        [Key]
        [Column("id")]
        public Guid Id { get; set; }

        [Column("brandname")]
        public string BrandName { get; set; } = String.Empty;

        [Column("description")]
        public string Description { get; set; } = String.Empty;

        [Column("img")]
        public string Img { get; set; } = String.Empty;

        [Column("price")]
        public double Price { get; set; } = 0.0;

        [Column("quantity")]
        public int Quantity { get; set; } = 0;

        public Guid BrandId { get; set; }              // FK

        public Brands? Brands { get; set; }

        //public List<Orders> Orders { get; set; } = new List<Orders>();

    }
}
