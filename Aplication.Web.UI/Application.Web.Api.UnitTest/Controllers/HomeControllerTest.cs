using System.Web.Mvc;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Application.Web.Api;
using Application.Web.Api.Controllers;

namespace Application.Web.Api.UnitTest.Controllers
{
    [TestClass]
    public class HomeControllerTest
    {
        [TestMethod]
        public void Index()
        {
            // Arrange
            HomeController controller = new HomeController();

            // Act
            ViewResult result = controller.Index() as ViewResult;

            // Assert
            Assert.IsNotNull(result);
            Assert.AreEqual("Home Page", result.ViewBag.Title);
        }
    }
}
