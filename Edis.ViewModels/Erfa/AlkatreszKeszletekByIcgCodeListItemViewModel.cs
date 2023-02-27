namespace Edis.ViewModels.Erfa
{
    public class AlkatreszKeszletekHelperModel
    {
        public int PrdId { get; set; }
        public int LapAnyagIgeny { get; set; } = 0;
        public decimal LapAnyagSzabad { get; set; } = 0;
        public double ElAnyagIgeny { get; set; } = 0;
        public double ElAnyagSzabad { get; set; } = 0;
        public double KellekIgeny { get; set; } = 0;
        public double KellekSzabad { get; set; } = 0;
        public string LapAnyag => $"Lapanyag: {LapAnyagIgeny.ToString()} / {LapAnyagSzabad.ToString()}";
        public string ElAnyag => $"Élanyag: {ElAnyagIgeny.ToString()} / {ElAnyagSzabad.ToString()}";
        public string Kellek => $"Kellék: {KellekIgeny.ToString()} / {KellekSzabad.ToString()}";
    }
}
