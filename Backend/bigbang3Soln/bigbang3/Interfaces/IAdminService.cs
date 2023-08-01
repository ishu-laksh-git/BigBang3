using bigbang3.Models;
using bigbang3.Models.DTO;

namespace bigbang3.Interfaces
{
    public interface IAdminService
    {
        public Task<Agent?> UpdateStatus(StatusDTO status);
    }
}
