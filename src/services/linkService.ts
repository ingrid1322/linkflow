import prisma from '../config/prisma';
import crypto from 'crypto';

export async function createShortLink(originalUrl: string) {
  const shortCode = crypto.randomBytes(3).toString('hex');

  return await prisma.link.create({
    data: {
      originalUrl,
      shortCode,
    },
  });
}

export async function getLinkByCode(shortCode: string) {
  const link = await prisma.link.findUnique({
    where: { shortCode },
  });

  if (link) {
    await prisma.link.update({
      where: { id: link.id },
      data: { clicks: { increment: 1 } },
    });
  }

  return link;
}

export async function getAllLinks() {
  return await prisma.link.findMany({
    orderBy: { createdAt: 'desc' },
  });
}