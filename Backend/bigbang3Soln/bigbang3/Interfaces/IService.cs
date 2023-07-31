using bigbang3.Models.DTO;

namespace bigbang3.Interfaces
{
    public interface IService
    {
        public Task<UserDTO?> AgentRegister(AgentRegDTO agentRegDTO);
        public Task<UserDTO?> TravellerRegister(TravellerRegDTO travellerDTO);
        public Task<UserDTO?> Login(UserDTO userDTO);
    }
}
