using System.Web;
using System.Web.Optimization;

namespace Aplication.Web.UI
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/Lib/jquery-{version}.js"));
                        
            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/Lib/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/Lib/modernizr-*"));
                        
            bundles.Add(new ScriptBundle("~/bundles/uuid").Include(
                        "~/Scripts/Lib/uuid.js"));
                       
            bundles.Add(new ScriptBundle("~/bundles/core").Include(
                        "~/Scripts/App/Core/namespace.js", 
                        "~/Scripts/App/Core/core.js"));
                        
            bundles.Add(new ScriptBundle("~/bundles/meuMain").Include(
                         "~/Scripts/Vendor/menu_main.js"));
                         
           bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/site.css"));
                        
        }
    }
}
