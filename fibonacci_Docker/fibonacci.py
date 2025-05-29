def fibonacci(n):
    seq = [0, 1]
    for i in range(2, n):
        seq.append(seq[i - 1] + seq[i - 2])
    return seq

if __name__ == "__main__":
    n = int(input("Digite quantos termos da sequência você quer: "))
    print(fibonacci(n))
