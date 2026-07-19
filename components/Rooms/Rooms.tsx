import Image from "next/image";
import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import JaText from "@/components/JaText/JaText";
import styles from "./Rooms.module.scss";

const roomPhotos = [
  { src: "/images/photos/room-a.jpg", width: 1600, height: 1066 },
  { src: "/images/photos/room-twin.jpg", width: 1600, height: 1066 },
  { src: "/images/photos/room-c.jpg", width: 1600, height: 1066 },
];

export default function Rooms({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <section id="rooms" className={styles.section} aria-labelledby="rooms-heading">
      <div className={styles.inner}>
        <div className="prose" data-reveal>
          <h2 id="rooms-heading">{dict.rooms.heading}</h2>
          <p className={styles.lead}>
            <JaText text={dict.rooms.lead} locale={locale} />
          </p>
        </div>
        <ul className={styles.roomList} data-reveal>
          {dict.rooms.roomTypes.map((room) => (
            <li key={room.id} className={styles.roomRow}>
              <h3>{room.title}</h3>
              <dl className={styles.roomSpecs}>
                <div>
                  <dt>{room.roomCountLabel}</dt>
                  <dd>{room.roomCountValue}</dd>
                </div>
                <div>
                  <dt>{room.capacityLabel}</dt>
                  <dd>{room.capacityValue}</dd>
                </div>
              </dl>
            </li>
          ))}
        </ul>
        <div className={styles.gallery} data-reveal>
          <ul className={styles.galleryList}>
            {roomPhotos.map((photo, index) => (
              <li
                key={photo.src}
                className={styles.galleryItem}
                data-featured={index === 0}
              >
                <Image
                  src={photo.src}
                  alt={dict.rooms.photoAlt}
                  width={photo.width}
                  height={photo.height}
                  sizes={
                    index === 0
                      ? "(min-width: 768px) 40vw, 100vw"
                      : "(min-width: 768px) 27vw, 90vw"
                  }
                />
              </li>
            ))}
          </ul>
          <p className={styles.galleryCaption}>{dict.rooms.galleryCaption}</p>
        </div>
      </div>
    </section>
  );
}
