using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace Intravision.Domain.Models
{
    [Table("brands")]
    public class Brands
    {
        [Key]
        [Column("id")]
        public Guid Id { get; set; }

        [Column("brandname")]
        public string BrandName { get; set; } = String.Empty;

        public Goods? Goods { get; set; }
    }
}
