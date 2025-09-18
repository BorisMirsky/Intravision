namespace Intravision.Web.Contracts
{
    public record CoinRequest
    {
        public byte Denomination { get; set; } = 0;
        public int Quantity { get; set; } = 0;
    }
}


