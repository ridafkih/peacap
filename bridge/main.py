from scapy.all import sniff, get_if_addr, conf

ip_address_local = get_if_addr(conf.iface)
print(1)


def handle_packets(packet):
    if "IP" not in packet:
        return

    ip_address_src = packet["IP"].src
    ip_address_dest = packet["IP"].dst
    outgoing = "1" if ip_address_src == ip_address_local else "0"
    payload = bytes(packet["TCP"].payload).hex()

    elements = (
        ip_address_src,
        ip_address_dest,
        outgoing,
        payload
    )

    if (payload != ""):
        print(",".join(elements))


sniff(filter="tcp", prn=lambda x: handle_packets(x), store=0)
