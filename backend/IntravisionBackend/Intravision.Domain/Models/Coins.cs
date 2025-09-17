using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;




namespace Intravision.Domain.Models
{
    [Table("coins")]
    public class Coins
    {
        [Key]
        [Column("id")]
        public Guid Id { get; set; }

        [Column("denomination")]
        public byte Denomination { get; set; } = 0;

        [Column("quantity")]
        public int Quantity { get; set; } = 0;
    }
}
