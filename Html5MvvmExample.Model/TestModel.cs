namespace Html5MvvmExample.Model
{
    using System;
    using System.Collections.Generic;

    using Html5MvvmExample.Model.DataAccess;

    public class TestModel : IDisposable
    {
        public void AddData(string data)
        {
            DataStorage.AddData(data);       
        }

        public List<string> GetData()
        {
            return DataStorage.GetData();
        }

        public void Dispose()
        {
        }
    }
}
