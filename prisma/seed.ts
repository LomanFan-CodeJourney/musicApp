import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import { artistsData } from './songsData';

const prisma = new PrismaClient();

const run = async () => {
  await Promise.all(
    artistsData.map((artist) =>
      prisma.artist.upsert({
        // upsert - create or update
        where: { name: artist.name },
        update: {},
        create: {
          name: artist.name,
          songs: {
            create: artist.songs.map((song) => ({
              name: song.name,
              duration: song.duration,
              url: song.url,
            })),
          },
        },
      })
    )
  );

  const salt = bcrypt.gentSaltSync();
  const user = await prisma.user.upsert({
    where: { email: 'user@test.com' },
    update: {},
    create: {
      email: 'user@test.com',
      password: bcrypt.hashSync('password', salt),
    },
  });
};

run()
  .catch((e) => {
    console.error(e);
    process.exit(1); // 1 - error in terminal, 0 - not error
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
