using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Aplication.Web.UI.Startup))]
namespace Aplication.Web.UI
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
