using Microsoft.EntityFrameworkCore;
using TourPackagesAPI.Interfaces;
using TourPackagesAPI.Models;

namespace TourPackagesAPI.Services
{
    public class itenaryRepo : IRepo<itenary, int>
    {
        private readonly Context _context;
        public itenaryRepo(Context context)
        {
            _context = context;
        }
        public async Task<itenary?> Add(itenary item)
        {
            var plan = _context.Itenaries.SingleOrDefault(i => i.itenaryItemId == item.itenaryItemId);
            if (plan == null)
            {
                try
                {
                    _context.Itenaries.Add(item);
                    await _context.SaveChangesAsync();
                    
                    return item;
                }
                catch (Exception)
                {
                    throw new Exception();
                }
            }
            return null;
        }

        public async Task<itenary?> Delete(int id)
        {
            try
            {
                var plan = await Get(id);
                if (plan != null)
                {
                    _context.Itenaries.Remove(plan);
                    await _context.SaveChangesAsync();
                    return plan;
                }
                return null;

            }
            catch (Exception)
            {
                throw new Exception();
            }
        }

        public async Task<itenary?> Get(int id)
        {
            try
            {
                var plan = await _context.Itenaries.SingleOrDefaultAsync(i => i.itenaryItemId == id);
                if (plan == null)
                {
                    return null;
                }
                return plan;
            }
            catch (Exception)
            {
                throw new Exception();
            }
        }

        public async Task<ICollection<itenary>?> GetAll()
        {
            try
            {
                var plan = await _context.Itenaries.ToListAsync();
                if (plan != null)
                {
                    return plan;
                }
                return null;
            }
            catch (Exception)
            {
                throw new Exception();
            }
        }

        public async Task<itenary?> Update(itenary item)
        {
            var plan = _context.Itenaries.SingleOrDefault(i => i.itenaryItemId == item.itenaryItemId);
            if (plan != null)
            {
                try
                {
                    plan.activity= item.activity;
                    plan.packageId= item.packageId;
                    plan.day = item.day;
                    await _context.SaveChangesAsync();
                    return plan;
                }
                catch (Exception)
                {
                    throw new Exception();
                }
            }
            return null;
        }
    }
}
