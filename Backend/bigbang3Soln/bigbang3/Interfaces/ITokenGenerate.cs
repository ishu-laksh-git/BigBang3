using bigbang3.Models.DTO;

namespace bigbang3.Interfaces
{
    public interface ITokenGenerate
    {
        public string GenerateToken(UserDTO user);
    }
}
