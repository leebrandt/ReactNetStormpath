using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace ReactNetStormpath.Controllers
{
    public class ValuesController : Controller
    {
        public IEnumerable<string> Index(){
            return new string[]{"value 3", "value 4"};
        }
    }
}