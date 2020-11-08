---
title: Recovering Partitions
description: When you've slightly formatted the wrong disk during installation
publishedAt: 2017-01-02 14:52:00
published: true
---

## The Background

Last year I was struck with a self inflicted problem when upgrading enterprise versions of Windows 8.1 to Windows 10 on my work PC.
Within the machines we have an SSD (256 GB) and HDD (512 GB). The SSD inside the machine was to be upgraded to a larger 512 GB version at the same time.

This is where it got interesting; I had managed to confuse myself in the installation process thinking that the 512 GB HDD was should be a clean drive.
You can guess what happened next...

_Goodbye files, goodbye projects and goodbye databases._

## Enter Panic

Realising the instantaneous failure to use my brain, my body felt flushed all over.
I pushed on and installed Windows 10 onto the new SSD.
Many minutes were spent anxiously hoping that the data remained intact and only the partition map was erased.
After completing the installation process, I looked around online to find the best way to recover data from a GPT mapped drive.

In the end it was only a quick format of the drive (deleting the partition location information).
Since this was the issue I used [testdisk][official] to detect the deleted partitions and restore them.

This article was inspired by an [answer][askubuntu] I had left on Ask Ubuntu to resolve a similar problem.
I'll outline the solution as a step by step guide below:

## Restoring Partitions

Assuming your disk drive is located at `/dev/sdb`, you can check using `fdisk -l /dev/sdb`

Launch `testdisk` and follow the ons screen process to recover your partitions.

Simply:
1. When asked to create logs, select`[No Log]`.
2. Proceed with selecting `[Analyse]` to scan for the deleted partitions.
3. This should detect the drives in your PC where you will be able to select the correct disk and `[Proceed]`.
4. Just select `[Intel]` if you have a MBR disk layout. It will then scan and detect the deleted partitions.
5. If you are happy with the layout you can then `[Write]` the partition layout to disk.
6. Otherwise you can perform a `[Deeper Search]` to detect partitions that may have been deleted.

This [guide] here follows the process above with screenshots.
Additionally you can burn the [livecd] to a CD or burn the image to a USB stick to get access to the `testdisk` tool.

[guide]: http://www.dedoimedo.com/computers/linux-data-recovery.html
[official]: http://www.cgsecurity.org/wiki/TestDisk
[livecd]: http://www.cgsecurity.org/wiki/TestDisk_Livecd
[askubuntu]: http://askubuntu.com/questions/741462/how-to-recover-deleted-windows-partition-with-complete-data/741469#741469
