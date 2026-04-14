import { useState } from "react";
import { X, CalendarDays, ChevronLeft, ChevronRight } from "lucide-react";
import actPrinter from "@/assets/activity-printer.jpg";
import actWiring from "@/assets/activity-wiring.jpg";
import actEncoding from "@/assets/activity-encoding.jpg";
import actHardware from "@/assets/activity-hardware.jpg";
import printer1 from "@/assets/printer-1.jfif";
import printer2 from "@/assets/printer-2.jfif";
import printer3 from "@/assets/printer-3.jfif";
import printer4 from "@/assets/printer-4.jfif";
import printer5 from "@/assets/printer-5.jfif";
import printer6 from "@/assets/printer-6.jfif";
import printer7 from "@/assets/printer-7.jfif";
import printer8 from "@/assets/printer-8.jfif";
import printer9 from "@/assets/printer-9.jfif";
import printer10 from "@/assets/printer-10.jfif";
import printer11 from "@/assets/printer-11.jfif";
import printer12 from "@/assets/printer-12.jpg";
import printer13 from "@/assets/printer-13.jpg";
import printer14 from "@/assets/printer-14.jpg";
import printer15 from "@/assets/printer-15.jpg";
import network1 from "@/assets/network-1.jfif";
import network2 from "@/assets/network-2.jfif";
import network3 from "@/assets/network-3.jpg";
import network4 from "@/assets/network-4.jpg";
import network5 from "@/assets/network-5.jpg";
import network6 from "@/assets/network-6.jpg";
import network7 from "@/assets/network-7.jpg";
import network8 from "@/assets/network-8.jpg";
import network9 from "@/assets/network-9.jpg";
import network10 from "@/assets/network-10.jfif";
import network11 from "@/assets/network-11.jfif";
import network12 from "@/assets/network-12.jpg";
import network13 from "@/assets/network-13.png";
import network14 from "@/assets/network-14.jpg";
import network15 from "@/assets/network-15.jpg";
import network16 from "@/assets/network-16.jpg";
import network17 from "@/assets/network-17.jpg";
import network18 from "@/assets/network-18.jpg";
import network19 from "@/assets/network-19.jpg";
import network20 from "@/assets/network-20.jpg";
import network21 from "@/assets/network-21.jpg";
import encoding1 from "@/assets/encoding-1.jpg";
import encoding2 from "@/assets/encoding-2.jpg";
import encoding3 from "@/assets/encoding-3.jpg";
import encoding4 from "@/assets/encoding-4.jpg";
import encoding5 from "@/assets/encoding-5.jpg";
import encoding6 from "@/assets/encoding-6.jpg";
import encoding7 from "@/assets/encoding-7.jpg";
import encoding8 from "@/assets/encoding-8.jpg";

interface Photo {
  src: string;
  caption: string;
  date: string;
}

interface Album {
  title: string;
  cover: string;
  photos: Photo[];
}

const albums: Album[] = [
  {
    title: "Printer Maintenance",
    cover: printer1,
    photos: [
      { src: printer1, caption: "Checking printer paper jam issue", date: "January 2, 2025" },
      { src: printer2, caption: "Replacing ink cartridges on HP printer", date: "January 4, 2025" },
      { src: printer3, caption: "Cleaning printer heads for better output", date: "January 6, 2025" },
      { src: printer4, caption: "Troubleshooting printer offline error", date: "January 8, 2025" },
      { src: printer5, caption: "Installing new printer driver on office PC", date: "January 10, 2025" },
      { src: printer6, caption: "Fixing paper feed roller alignment", date: "January 13, 2025" },
      { src: printer7, caption: "Configuring wireless printing for staff", date: "January 15, 2025" },
      { src: printer8, caption: "Refilling toner on laser printer", date: "January 17, 2025" },
      { src: printer9, caption: "Testing print quality after maintenance", date: "January 20, 2025" },
      { src: printer10, caption: "Replacing fuser unit on LaserJet", date: "January 22, 2025" },
      { src: printer11, caption: "Clearing printer queue and resetting spooler", date: "January 24, 2025" },
      { src: printer12, caption: "Setting up shared printer on the network", date: "January 27, 2025" },
      { src: printer13, caption: "Diagnosing streaky print output", date: "January 28, 2025" },
      { src: printer14, caption: "Replacing waste ink pad on Epson printer", date: "January 30, 2025" },
      { src: printer15, caption: "Final printer maintenance checkup for January", date: "January 31, 2025" },
    ],
  },
  {
    title: "Network Wiring",
    cover: network1,
    photos: [
      { src: network1, caption: "Crimped network cables for internet connection in the CCJE building.", date: "February 1, 2025" },
      { src: network2, caption: "Installed and routed Ethernet cables inside the MIS office.", date: "February 3, 2025" },
      { src: network3, caption: "Crimped network cables for the Hostel building.", date: "February 4, 2025" },
      { src: network4, caption: "Crimped network cables for the MIS office.", date: "February 5, 2025" },
      { src: network5, caption: "Crimped network cables in the boardroom.", date: "February 6, 2025" },
      { src: network6, caption: "Repaired and organized the internet cabinet in the CCJE building.", date: "February 7, 2025" },
      { src: network7, caption: "Installed Ethernet cables from the CCJE building.", date: "February 10, 2025" },
      { src: network8, caption: "Crimped Ethernet cables.", date: "February 11, 2025" },
      { src: network9, caption: "Installed Ethernet cables in the Agoncillo building.", date: "February 12, 2025" },
      { src: network10, caption: "Installed Ethernet cables in the gymnasium.", date: "February 13, 2025" },
      { src: network11, caption: "Repaired the internet cabinet.", date: "February 14, 2025" },
      { src: network12, caption: "Fixed and organized network cables in the Agoncillo building.", date: "February 17, 2025" },
      { src: network14, caption: "Repaired network cables at the back of the MIS office.", date: "February 18, 2025" },
      { src: network15, caption: "Repaired the internet cabinet in the MIS office.", date: "February 19, 2025" },
      { src: network16, caption: "Fixed the internet connection in the library building.", date: "February 20, 2025" },
      { src: network17, caption: "Installed Ethernet cables in the CCJE office.", date: "February 21, 2025" },
      { src: network18, caption: "Repaired internet connection in the Office of the Board Secretary.", date: "February 24, 2025" },
      { src: network19, caption: "Installed Ethernet cables in the HR office.", date: "February 25, 2025" },
      { src: network20, caption: "Installed Ethernet cables in the SOA office.", date: "February 26, 2025" },
      { src: network21, caption: "Installed Ethernet cables in the Board Office.", date: "February 28, 2025" },
    ],
  },
  {
    title: "Data Encoding",
    cover: encoding1,
    photos: [
      { src: encoding1, caption: "Data encoding task 1", date: "March 3, 2025" },
      { src: encoding2, caption: "Data encoding task 2", date: "March 5, 2025" },
      { src: encoding3, caption: "Data encoding task 3", date: "March 7, 2025" },
      { src: encoding4, caption: "Data encoding task 4", date: "March 10, 2025" },
      { src: encoding5, caption: "Data encoding task 5", date: "March 12, 2025" },
      { src: encoding6, caption: "Data encoding task 6", date: "March 17, 2025" },
      { src: encoding7, caption: "Data encoding task 7", date: "March 19, 2025" },
      { src: encoding8, caption: "Data encoding task 8", date: "March 21, 2025" },
    ],
  },
  {
    title: "Hardware Troubleshooting",
    cover: actHardware,
    photos: [
      { src: actHardware, caption: "Diagnosing a desktop that won't boot", date: "April 1, 2025" },
      { src: actHardware, caption: "Replacing a faulty RAM stick", date: "April 2, 2025" },
      { src: actHardware, caption: "Cleaning dust from CPU fans and heatsink", date: "April 3, 2025" },
      { src: actHardware, caption: "Checking power supply unit voltage output", date: "April 4, 2025" },
      { src: actHardware, caption: "Swapping out a dead hard drive", date: "April 7, 2025" },
      { src: actHardware, caption: "Reseating loose SATA cables", date: "April 8, 2025" },
      { src: actHardware, caption: "Testing motherboard with a multimeter", date: "April 9, 2025" },
      { src: actHardware, caption: "Replacing thermal paste on CPU", date: "April 10, 2025" },
      { src: actHardware, caption: "Installing new graphics card for design PC", date: "April 11, 2025" },
      { src: actHardware, caption: "Fixing a monitor with no display output", date: "April 14, 2025" },
      { src: actHardware, caption: "Repairing a broken USB port on a desktop", date: "April 15, 2025" },
      { src: actHardware, caption: "Upgrading office PC from HDD to SSD", date: "April 16, 2025" },
      { src: actHardware, caption: "Cloning old drive data to new SSD", date: "April 17, 2025" },
      { src: actHardware, caption: "Troubleshooting overheating laptop", date: "April 18, 2025" },
      { src: actHardware, caption: "Replacing damaged keyboard on a laptop", date: "April 21, 2025" },
      { src: actHardware, caption: "Checking and replacing CMOS battery", date: "April 22, 2025" },
      { src: actHardware, caption: "Fixing blue screen error on staff PC", date: "April 23, 2025" },
      { src: actHardware, caption: "Reconnecting loose internal cables", date: "April 24, 2025" },
      { src: actHardware, caption: "Installing additional RAM for upgraded PC", date: "April 25, 2025" },
      { src: actHardware, caption: "Reassembling a fully repaired desktop unit", date: "April 28, 2025" },
      { src: actHardware, caption: "Stress testing repaired hardware", date: "April 29, 2025" },
      { src: actHardware, caption: "Documenting all hardware repairs for the month", date: "April 30, 2025" },
      { src: actHardware, caption: "Final hardware inventory check and sign-off", date: "April 30, 2025" },
    ],
  },
];

const GallerySection = () => {
  const [selectedAlbum, setSelectedAlbum] = useState<number | null>(null);
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  const closeAll = () => {
    setSelectedAlbum(null);
    setSelectedPhoto(null);
  };

  return (
    <section id="gallery" className="py-20 px-6 section-alt">
      <div className="container max-w-5xl">
        <h2 className="text-3xl font-bold text-foreground mb-2">Photo Gallery</h2>
        <div className="w-16 h-1 bg-primary rounded-full mb-4" />
        <p className="text-muted-foreground mb-10">
          Snapshots from my OJT experience. Click an album to browse photos!
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {albums.map((album, i) => (
            <div
              key={i}
              onClick={() => setSelectedAlbum(i)}
              className="group relative overflow-hidden rounded-xl border border-border shadow-sm cursor-pointer"
            >
              <img
                src={album.cover}
                alt={album.title}
                loading="lazy"
                width={400}
                height={300}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 right-0 bg-foreground/70 backdrop-blur-sm px-3 py-2">
                <p className="text-primary-foreground text-sm font-medium">{album.title}</p>
                <p className="text-primary-foreground/70 text-xs">{album.photos.length} photos</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Album Lightbox */}
      {selectedAlbum !== null && selectedPhoto === null && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={closeAll}
        >
          <div
            className="relative bg-card rounded-2xl overflow-hidden max-w-3xl w-full max-h-[85vh] shadow-2xl animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-border">
              <h3 className="text-lg font-bold text-foreground">
                {albums[selectedAlbum].title}
                <span className="text-sm font-normal text-muted-foreground ml-2">
                  ({albums[selectedAlbum].photos.length} photos)
                </span>
              </h3>
              <button
                onClick={closeAll}
                className="bg-muted hover:bg-muted/80 text-foreground rounded-full p-1.5 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="overflow-y-auto max-h-[calc(85vh-64px)] p-4 space-y-3">
              {albums[selectedAlbum].photos.map((photo, i) => (
                <div
                  key={i}
                  onClick={() => setSelectedPhoto(i)}
                  className="flex gap-4 p-3 rounded-xl border border-border hover:bg-muted/50 cursor-pointer transition-colors"
                >
                  <img
                    src={photo.src}
                    alt={photo.caption}
                    className="w-28 h-20 object-cover rounded-lg flex-shrink-0"
                  />
                  <div className="flex flex-col justify-center min-w-0">
                    <p className="text-sm font-semibold text-foreground">{photo.caption}</p>
                    <div className="flex items-center gap-1.5 mt-1 text-primary">
                      <CalendarDays className="w-3.5 h-3.5" />
                      <span className="text-xs font-medium">{photo.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Single Photo View */}
      {selectedAlbum !== null && selectedPhoto !== null && (
        <div
          className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative bg-card rounded-2xl overflow-hidden max-w-2xl w-full shadow-2xl animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-3 right-3 z-10 bg-foreground/50 hover:bg-foreground/70 text-primary-foreground rounded-full p-1.5 transition"
            >
              <X className="w-5 h-5" />
            </button>

            <img
              src={albums[selectedAlbum].photos[selectedPhoto].src}
              alt={albums[selectedAlbum].photos[selectedPhoto].caption}
              className="w-full max-h-[60vh] object-cover"
            />

            <div className="p-5 space-y-2">
              <h3 className="text-lg font-bold text-foreground">
                {albums[selectedAlbum].photos[selectedPhoto].caption}
              </h3>
              <div className="flex items-center gap-2 text-primary">
                <CalendarDays className="w-4 h-4" />
                <span className="text-sm font-medium">
                  {albums[selectedAlbum].photos[selectedPhoto].date}
                </span>
              </div>
            </div>

            <div className="flex justify-between px-5 pb-4">
              <button
                disabled={selectedPhoto === 0}
                onClick={() => setSelectedPhoto(selectedPhoto - 1)}
                className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground disabled:opacity-30 transition"
              >
                <ChevronLeft className="w-4 h-4" /> Previous
              </button>
              <span className="text-xs text-muted-foreground">
                {selectedPhoto + 1} / {albums[selectedAlbum].photos.length}
              </span>
              <button
                disabled={selectedPhoto === albums[selectedAlbum].photos.length - 1}
                onClick={() => setSelectedPhoto(selectedPhoto + 1)}
                className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground disabled:opacity-30 transition"
              >
                Next <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
