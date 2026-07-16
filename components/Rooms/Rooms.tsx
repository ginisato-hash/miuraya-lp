import Image from "next/image";
import roomsData from "@/data/rooms.json";
import type { Room } from "@/types/room";
import styles from "./Rooms.module.scss";

const rooms: Room[] = roomsData;

const roomPhotos = [
  { src: "/images/photos/room-a.jpg", width: 1600, height: 1066 },
  { src: "/images/photos/room-b.jpg", width: 1600, height: 1066 },
  { src: "/images/photos/room-c.jpg", width: 1600, height: 1066 },
];

export default function Rooms() {
  return (
    <section id="rooms" className={styles.section} aria-labelledby="rooms-heading">
      <div className={styles.inner}>
        <p className={styles.kicker}>05</p>
        <h2 id="rooms-heading">客室</h2>
        <ul className={styles.roomList}>
          {rooms.map((room) => (
            <li key={room.id} className={styles.roomRow}>
              <h3>
                {room.tatamiSize}畳・{room.capacity}名用
              </h3>
              <dl className={styles.roomSpecs}>
                <div>
                  <dt>室数</dt>
                  <dd>{room.roomCount}室</dd>
                </div>
                <div>
                  <dt>定員</dt>
                  <dd>{room.capacity}名</dd>
                </div>
                <div>
                  <dt>冷房設備</dt>
                  <dd>{room.hasCooling ? "あり" : "なし"}</dd>
                </div>
              </dl>
            </li>
          ))}
        </ul>
        <div className={styles.gallery}>
          <ul className={styles.galleryList}>
            {roomPhotos.map((photo) => (
              <li key={photo.src} className={styles.galleryItem}>
                <Image
                  src={photo.src}
                  alt="館内の和室の一例"
                  width={photo.width}
                  height={photo.height}
                  sizes="(min-width: 768px) 30vw, 90vw"
                />
              </li>
            ))}
          </ul>
          <p className={styles.galleryCaption}>客室の一例</p>
        </div>
      </div>
    </section>
  );
}
