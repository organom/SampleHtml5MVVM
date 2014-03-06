namespace Html5MvvmExample.Model.DataAccess
{
    using System.Collections.Generic;

    public static class DataStorage
    {
        private static readonly List<string> StoredData = new List<string>();

        public static void AddData(string data)
        {
            StoredData.Add(data);
        }

        public static List<string> GetData()
        {
            return StoredData;
        }
    }
}
