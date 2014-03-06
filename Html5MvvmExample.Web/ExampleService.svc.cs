namespace Html5MvvmExample.Web
{
    using Html5MvvmExample.Model;
    using System.Collections.Generic;

    public class ExampleService : IExampleService
    {
        #region IExampleService Members

        public bool AddData(string data)
        {
            using (var model = new TestModel())
            {
                model.AddData(data);
                return true;
            }
        }

        public List<string> GetData()
        {
            using (var model = new TestModel())
            {
                return model.GetData();
            }
        }

        #endregion
    }
}
